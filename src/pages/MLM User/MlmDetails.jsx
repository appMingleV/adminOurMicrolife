import React, { useState } from "react";

const MlmDetails = () => {
    const [user, setUser] = useState({
        id: "MLM12345",
        fullName: "John Doe",
        transactionId: "TXN789456",
        mobile: "+1 123-456-7890",
        image: "https://via.placeholder.com/150",
    });
    const handleStatusChange = (newStatus) => {
        setUser((prevUser) => ({ ...prevUser, status: newStatus }));
    };

    return (
        <div className="bg-gray-100 p-6 flex justify-center items-center">
            <div className="bg-white rounded-xl shadow-xl p-8  w-full">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-4">
                    <h2 className="text-2xl font-bold text-gray-800">{user.fullName}</h2>

                </div>

                {/* User Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">


                    {/* Details Section */}
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-700">
                            MLM User Details
                        </h3>
                        <div className="text-gray-600 space-y-2">
                            <p>
                                <strong className="font-medium text-gray-800">ID:</strong>{" "}
                                {user.id}
                            </p>
                            <p>
                                <strong className="font-medium text-gray-800">Full Name:</strong>{" "}
                                {user.fullName}
                            </p>
                            <p>
                                <strong className="font-medium text-gray-800">Transaction ID:</strong>{" "}
                                {user.transactionId}
                            </p>
                            <p>
                                <strong className="font-medium text-gray-800">Mobile:</strong>{" "}
                                {user.mobile}
                            </p>
                        </div>

                    </div>
                    {/* User Image */}
                    <div className="flex justify-center">
                        <img
                            src={user.image}
                            alt="User"
                            className="w-32 h-32 rounded-lg object-cover shadow-md border border-gray-200"
                        />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={() => handleStatusChange("Active")}
                        className="bg-green-600 text-white font-medium py-2 px-5 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-700 focus:outline-none"
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => handleStatusChange("Suspended")}
                        className="bg-red-500 text-white font-medium py-2 px-5 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-red-600 focus:outline-none"
                    >
                        Reject
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MlmDetails;
