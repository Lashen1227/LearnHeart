import { useState } from "react";
import AddResource from "../../pages/resourceBankPages/AddResource";

function VolMidbar() {
    const [formData, setFormData] = useState({
        qualifications: "",
        language: "",
        subjects: "",
        availableDates: []
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const availableDatesOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            availableDates: checked
                ? [...prev.availableDates, value]
                : prev.availableDates.filter((date) => date !== value),
        }));
    };

    const handleClear = () => {
        setFormData({
            qualifications: "",
            language: "",
            subjects: "",
            availableDates: []
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center w-full max-w-md p-6 mx-auto text-white rounded-lg bg-custom-green">
                <h2 className="text-xl font-semibold">Join with Organizations</h2>
                <p className="mt-2 text-sm text-center">Check out the latest events you can join.</p>
                <form onSubmit={handleSubmit} className="w-full mt-4 space-y-4">
                    <input
                        type="text"
                        name="qualifications"
                        value={formData.qualifications}
                        onChange={handleChange}
                        placeholder="Education / Work Qualifications"
                        className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="text"
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        placeholder="Language Proficiency"
                        className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="text"
                        name="subjects"
                        value={formData.subjects}
                        onChange={handleChange}
                        placeholder="Teaching Subjects"
                        className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    <div className="w-full">
                        <p className="text-sm font-medium">Available Dates:</p>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            {availableDatesOptions.map((date) => (
                                <label key={date} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        value={date}
                                        checked={formData.availableDates.includes(date)}
                                        onChange={handleCheckboxChange}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <span className="text-sm">{date}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={handleClear}
                            className="w-full py-2 text-white transition rounded-md hover:bg-orange-600 bg-custom-orange"
                        >
                            Clear
                        </button>
                        <button
                            type="submit"
                            className="w-full py-2 text-white transition rounded-md bg-custom-orange hover:bg-orange-600"
                        >
                            Join
                        </button>
                    </div>
                </form>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col items-center p-6 text-white rounded-lg bg-custom-green">
                <h2 className="text-xl font-semibold">Add Resources</h2>
                <button 
                    className="w-1/2 py-2 mt-4 text-white transition rounded-md bg-custom-orange hover:bg-orange-600"
                    onClick={() => setIsModalOpen(true)}
                >
                    Publish
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center text-black bg-black bg-opacity-50">
                    <div className="relative w-full max-w-2xl p-6 overflow-y-auto rounded-lg shadow-lg bg-custom-page">
                        <button 
                            className="absolute text-gray-600 top-2 right-2 hover:text-gray-800"
                            onClick={() => setIsModalOpen(false)}
                        >
                            ✖
                        </button>
                        <AddResource />
                    </div>
                </div>
            )}
        </div>
    );
}

export default VolMidbar;
