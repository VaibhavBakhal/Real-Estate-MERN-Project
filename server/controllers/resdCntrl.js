import asyncHandler from "express-async-handler";
import prisma from "../config/PrismaConfig.js";

//create a residency in and put in collection
export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail,
  } = req.body.data;

  console.log(req.body.data);

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        owner: { connect: { email: userEmail } },
      },
    });
    res.send({ message: "Residency created sucessfully", residency });
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("A residency with address already there");
    }
    throw new Error(err.message);
  }
});

// to get all residency in the collection
export const getAllResidencies = asyncHandler(async (req, res) => {
  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.send(residencies);
});

//to get specific residency
export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const singleResidency = await prisma.residency.findUnique({
      where: { id: id },
    });
    res.send(singleResidency);
  } catch (err) {
    throw new Error(err.message);
  }
});
