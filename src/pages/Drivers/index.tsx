
import { Plus } from 'lucide-react';
import DriversTable from '../../components/DriversTable';
import { Driver } from '../../utilis/types';

const Drivers: React.FC = () => {
    const mockDrivers: Driver[] = [
        {
            id: '22',
            name: 'Əhməd Əhmədov',
            fin: '03556352',
            category: 'b',
            tabelNumber: '324324',
            addedBy: 'cahan',
            addedDate: '31-07-2025 11:09',
            editedBy: 'N/A',
            editedDate: '31-07-2025 11:09',
        },
    ];

    const handleEdit = (id: string) => {
        console.log('Edit driver:', id);
    };

    const handleDelete = (id: string) => {
        console.log('Delete driver:', id);
    };

    const handleCreateNew = () => {
        console.log('Create new driver');
    };

    return (
        <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Sürücülər
                        </h1>

                        <button
                            onClick={handleCreateNew}
                            className="flex items-center space-x-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            <Plus className="w-4 h-4" />
                            <span>Yenisini yarat</span>
                        </button>
                    </div>
                </div>

                <DriversTable
                    drivers={mockDrivers}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    );
};

export default Drivers;