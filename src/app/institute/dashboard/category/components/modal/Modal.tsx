"use client";

import {
    createCategory,
    resetStatus,
} from "@/lib/store/category/categorySlice";
import { Status } from "@/lib/store/global/types";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { ChangeEvent, useEffect, useState } from "react";

type ModalProps = {
    closeModal: () => void;
};

function Modal({ closeModal }: ModalProps) {
    const [categoryName, setName] = useState<string>("");
    const [categoryDescription, setDescription] = useState<string>("");

    const { status } = useAppSelector((store) => store.category);
    const dispatch = useAppDispatch();

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(createCategory(token, { categoryName, categoryDescription }));
        }
    };
    useEffect(() => {
        if (status === Status.Success) {
            dispatch(resetStatus());
            closeModal();
        }
    }, [status]);

    return (
        <>
            <div
                className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 flex items-center justify-center"

            >
                {/* overlay */}
                <div
                    onClick={closeModal}
                    aria-hidden="true"
                    className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
                ></div>
                {/* Modal Content */}
                <div
                    className="bg-white w-full max-w-2xl mx-4 p-6 rounded-lg shadow-lg relative"
                    onClick={(e) => e.stopPropagation()} // 👈 This prevents closing when clicking inside the modal
                >
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
                    >
                        &times;
                    </button>

                    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Add Category
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        action="#"
                        method="POST"
                        className="space-y-4"
                    >
                        {/* Title */}
                        <div>
                            <label
                                htmlFor="title"
                                className="block font-semibold text-gray-700 mb-1"
                            >
                                Category Name
                            </label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                id="title"
                                name="title"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Type Category Name..."
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label
                                htmlFor="description"
                                className="block font-semibold text-gray-700 mb-1"
                            >
                                Description
                            </label>
                            <textarea
                                onChange={(e) => setDescription(e.target.value)}
                                id="description"
                                name="description"
                                required
                                rows={5}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write Category Description..."
                            />
                        </div>

                        {/* Submit */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition"
                            >
                                Create Category
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Modal;
