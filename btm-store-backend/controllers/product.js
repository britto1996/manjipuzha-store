const asyncHandler = require("express-async-handler");
const Product = require("../models/product");
exports.getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

exports.getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

exports.deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: `product removed` });
  } else {
    res.status(404);
    throw new Error(`product not found`);
  }
});

exports.createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "sample name",
    price: 150,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "sample brand",
    category: "sample category",
    countInStock: 5,
    numReviews: 2,
    description: "sample description",
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

exports.updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error(`product not found`);
  }
});

exports.createProductReview = asyncHandler(async (req, res) => {
  // let rating;
  // let comment;
  // const takeProduct = new Product({
  //   rating: req.body.rating,
  //   comment: req.body.comment,
  // });
  const { rating, comment, name } = req.body;
  // console.log(takeProduct);

  const product = await Product.findById(req.params.id);
  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      // console.log(alreadyReviewed);
      res.status(404);
      throw new Error(`product already reviewed`);
    }
    const review = {
      name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };
    console.log(review);
    product.reviews.push(review);
    // console.log(product.reviews[0]);

    product.numReviews = product.reviews.length;
    // console.log(product.numReviews);

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;
    // console.log(product);

    await product.save();
    res.status(201).json({ message: `review added` });
  } else {
    res.status(404);
    throw new Error(`product not found`);
  }
});

exports.getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);
  res.json(products);
});
