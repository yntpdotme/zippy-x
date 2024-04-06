import mongoose from 'mongoose';

import {Wallet} from '../../common/models/index.js';
import {ApiError} from '../../common/utils/index.js';

const getWalletData = async userId => {
  return await Wallet.findOne({userId: userId}).populate('userId');
};

const depositeAmount = async (userId, amount) => {
  const wallet = await Wallet.findOneAndUpdate(
    {userId: userId},
    {$inc: {balance: amount}},
    { new: true }
  ).populate('userId');

  // Calculate gain
  const gainInBalance = await wallet.depositGain(amount);

  return {wallet, gainInBalance};
};

const transferAmount = async (senderId, recipientId, amount) => {
  let session;

  try {
    // Starting Session
    session = await mongoose.startSession();
    session.startTransaction();

    const senderWallet = await Wallet.findOne({userId: senderId}).session(
      session
    );

    if (!senderWallet || senderWallet.balanceINR < amount) {
      throw new ApiError(400, 'Insufficient balance');
    }

    const recipientWallet = await Wallet.findOne({
      userId: recipientId,
    }).session(session);

    if (!recipientWallet) {
      throw new ApiError(400, 'Invalid Recipient');
    }

    // Perform the transfer
    await Wallet.updateOne(
      {userId: senderId},
      {$inc: {balance: -amount}}
    ).session(session);

    await Wallet.updateOne(
      {userId: recipientId},
      {$inc: {balance: amount}}
    ).session(session);

    // Calculate gain
    await senderWallet.transferGain(-amount, {session});
    await recipientWallet.transferGain(amount, {session});

    // Commit the transaction
    await session.commitTransaction();

    return {success: true};
  } catch (error) {
    await session?.abortTransaction();
    throw error;
  } finally {
    session?.endSession();
  }
};

export const walletService = {
  walletData: getWalletData,
  deposite: depositeAmount,
  transfer: transferAmount,
};
