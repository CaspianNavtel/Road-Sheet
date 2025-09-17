import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import DataTable from '../../components/DataTable';
import { TravelRecord } from '../../utilis/types';

const TravelDocs: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const mockData: TravelRecord[] = [
        {
            id: '87',
            route: 'Gəncə → Baku',
            driver: 'Əhməd Əhmədsov b / 03556352',
            vehicle: 'N/A Opel 99-JZ-305',
            kmRange: '2084 → 2204',
            departure: '30-07-2025 12:00',
            return: 'N/A',
            dispatcher: 'cahan',
            addEdit: '31-07-2025',
        },
    ];

    const handleEdit = (id: string) => {
        console.log('Edit record:', id);
    };

    const handleDelete = (id: string) => {
        console.log('Delete record:', id);
    };

    return (
        <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Yol Vərəqələri
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <div className="flex flex-col sm:flex-row gap-3 flex-1">
                            <div className="relative max-w-md">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Axtar"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                />
                            </div>

                            <button className="px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                Hamısını göstər
                            </button>
                        </div>

                        <button className="flex items-center space-x-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                            <Plus className="w-4 h-4" />
                            <span>Yeni</span>
                        </button>
                    </div>
                </div>

                <DataTable
                    data={mockData}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    );
};

export default TravelDocs;