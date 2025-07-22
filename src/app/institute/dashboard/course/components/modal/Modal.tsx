"use client";

import { getCategory } from "@/lib/store/category/categorySlice";
import { createCourses, resetStatus } from "@/lib/store/course/courseSlice";
import { Icourse } from "@/lib/store/course/courseSlice.types";
import { Status } from "@/lib/store/global/types";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { ChangeEvent, useEffect, useState } from "react";

type ModalProps = {
    closeModal: () => void;
};

function Modal({ closeModal }: ModalProps) {
    const { category } = useAppSelector((store) => store.category);
    const { status } = useAppSelector((store) => store.courses)
    const dispatch = useAppDispatch();

    const [loading, setLoading] = useState(false)




    const [data, setData] = useState<Icourse>({
        courseName: '',
        coursePrice: '',
        courseDuration: '',
        courseDescription: '',
        courseLevel: '',
        courseImage: '',
        categoryId: ''
    });
    console.log(data, "Data.........")
    // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    //     const { name, value } = e.target
    //     setData({
    //         ...data,
    //         [name]: name == "productImage" ? e.target.files[0] as File : value
    //     })
    // }
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === "file" && e.target instanceof HTMLInputElement) {
            setData({
                ...data,
                [name]: e.target.files?.[0] || null,
            });
        } else {
            setData({
                ...data,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(createCourses(token, data))
        }
    };

    useEffect(() => {
        if (status === Status.Success) {
            dispatch(resetStatus())
            setLoading(false)
            closeModal();
        }
    }, [status]);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(getCategory(token));
        }
    }, []);

    return (
        <>
            <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 flex items-center justify-center">
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
                        Add Course
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
                                Course Name
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="title"
                                name="courseName"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Type Course Name..."
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="title"
                                className="block font-semibold text-gray-700 mb-1"
                            >
                                Course Price
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="title"
                                name="coursePrice"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Type Course Price"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="title"
                                className="block font-semibold text-gray-700 mb-1"
                            >
                                Course Duration
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="title"
                                name="courseDuration"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Type Course Duration..."
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="courseLevel"
                                className="block font-semibold text-gray-700 mb-1"
                            >
                                Course Level
                            </label>
                            <select
                                onChange={handleChange}
                                id="courseLevel"
                                name="courseLevel"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="" hidden>Select Level</option>
                                <option value="beginner" >Beginner</option>
                                <option value="intermediate" >Intermediate</option>
                                <option value="advance" >Advance</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="title"
                                className="block font-semibold text-gray-700 mb-1"
                            >
                                Course Image
                            </label>
                            <input
                                onChange={handleChange}
                                type="file"
                                id="title"
                                name="courseImage"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="category"
                                className="block font-semibold text-gray-700 mb-1"
                            >
                                Course Category
                            </label>
                            <select
                                onChange={handleChange}
                                id="category"
                                name="categoryId"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="" hidden>Select Category</option>
                                {category.length > 0 && category.map((categories) => <option key={categories.id} value={categories.id}>{categories.categoryName}</option>)}

                            </select>
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
                                onChange={handleChange}
                                id="description"
                                name="courseDescription"
                                required
                                rows={5}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write Course Description..."
                            />
                        </div>

                        {/* Submit */}
                        <div className="text-center">
                            <button disabled={loading}
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition"
                            >
                                {loading ? "Creating..." : "Create Course"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Modal;
