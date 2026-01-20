import { useState } from "react";
import Card from "./ui/card";
import { useForm } from "react-hook-form";
import { IoAdd } from "react-icons/io5";

interface Item {
  name: string;
  price: number;
  category: string;
  quantity: number;
}

const Dashboard = () => {
  const [products, setProducts] = useState<Item[]>(() => {
    const renderItems = localStorage.getItem("products");
    return renderItems ? JSON.parse(renderItems) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // filter distinct categoreies
  const categories = Array.from(new Set(products.map((p) => p.category)));

  // show only filetered products or default
  const filteredProducts = products.filter((product) => {
    const search = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "" || product.category === categoryFilter;
    return search && matchesCategory;
  });

  // total inventory value
  const totalInventoryValue = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Item>();

  //add item
  const addItem = (data: Item) => {
    const updated = [...products, data];
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
    reset();
  };

  // Remove item
  const removeItem = (itemToRemove: Item) => {
    const updated = products.filter((item) => item !== itemToRemove);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        <div className="flex justify-between"></div>
        <h2 className="text-2xl font-bold mb-1">Products</h2>
        <div className="flex gap-5 justify-between">
          <div className="mb-4 font-light">
            Total Products : {products.length}
          </div>
          <div className="text-end font-light">
            Inventory Value : {totalInventoryValue}
          </div>
          <div className="mb-4 ml-1 text-sm items-end font-light">
            {products.length <= 2 ? (
              <p className="bg-red-500 text-white p-1 text-2xs rounded-sm font-semibold">
                Low Stock!!
              </p>
            ) : (
              <p className="text-black font-semibold">Normal Inventory</p>
            )}
          </div>
        </div>
        <div className="space-x-2 mb-2">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-sm p-2 mt-1"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="p-2 border border-gray-300"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap gap-4">
          {products.length > 0 ? (
            filteredProducts.map((item, index) => (
              <Card key={index} item={item} onRemove={removeItem} />
            ))
          ) : (
            <p className="text-gray-500">Out of Stock</p>
          )}
        </div>
      </div>

      <div className="w-80 p-6 border-l border-gray-300 fixed right-0 top-0 h-full">
        <h3 className="text-lg font-semibold mb-4">Add New Item</h3>
        <form onSubmit={handleSubmit(addItem)} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="border border-gray-300 rounded px-3 py-2"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}

          <input
            type="number"
            placeholder="Price"
            {...register("price", {
              required: "Price is required",
              min: { value: 1, message: "Price must be greater than 0" },
            })}
            className="border border-gray-300 rounded px-3 py-2"
          />
          {errors.price && (
            <span className="text-red-500 text-sm">{errors.price.message}</span>
          )}

          <input
            type="number"
            placeholder="Quantity"
            {...register("quantity", {
              required: "Quantity is required",
              min: { value: 1, message: "Quantity must be greater than 0" },
            })}
            className="border border-gray-300 rounded px-3 py-2"
          />
          {errors.quantity && (
            <span className="text-red-500 text-sm">
              {errors.quantity.message}
            </span>
          )}

          <textarea
            placeholder="Category"
            {...register("category", {
              required: "Description is required",
            })}
            className="border border-gray-300 rounded px-3 py-2"
          />
          {errors.category && (
            <span className="text-red-500 text-sm">
              {errors.category.message}
            </span>
          )}

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 items-center rounded"
          >
            <IoAdd />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
