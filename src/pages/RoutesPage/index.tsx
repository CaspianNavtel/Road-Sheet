import React from 'react';

const Routes: React.FC = () => {
    return (
        <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Marşrutlar
                    </h1>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Marşrutlar</h3>
                    <p className="text-gray-500 dark:text-gray-400">Marşrut məlumatları burada göstəriləcək</p>
                </div>
            </div>
        </div>
    );
};

export default Routes;