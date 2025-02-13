import { useState } from 'react';
import { BiSolidDish } from 'react-icons/bi';
import { MdCategory, MdTableBar } from 'react-icons/md';

import Metrics from '../components/dashboard/Metrics';
import RecentOrders from '../components/dashboard/RecentOrders';
import Modal from '../components/dashboard/Modal';

const adminButtons = [
  { label: 'Add Table', icon: <MdTableBar />, action: 'table' },
  { label: 'Add Category', icon: <MdCategory />, action: 'category' },
  { label: 'Add Dishes', icon: <BiSolidDish />, action: 'dishes' },
];

const adminTabs = ['Metrics', 'Orders', 'Payment'];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<string>('Metrics');
  const [isTableModalOpen, setIsTableModalOpen] = useState<boolean>(false);

  const handleOpenModal = (action: string) => {
    if (action === 'table') setIsTableModalOpen(true);
  };

  return (
    <div className='bg-[#1f1f1f] h-[calc(100vh-5rem)]'>
      <div className='container mx-auto flex items-center justify-between py-14 px-6 md:px-4'>
        <div className='flex items-center gap-3'>
          {adminButtons.map(({ label, icon, action }) => {
            return (
              <button
                key={label}
                onClick={() => handleOpenModal(action)}
                className='bg-[#1a1a1a] hover:bg-[#262626] px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-base flex items-center gap-2 cursor-pointer'
              >
                {label} {icon}
              </button>
            );
          })}
        </div>
        <div className='flex items-center gap-3'>
          {adminTabs.map((tab) => {
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-base flex items-center gap-2 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-yellow-600'
                    : 'bg-[#1a1a1a] hover:bg-[#262626]'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>
      {activeTab === 'Metrics' && <Metrics />}
      {activeTab === 'Orders' && <RecentOrders />}
      {isTableModalOpen && <Modal setIsTableModalOpen={setIsTableModalOpen} />}
    </div>
  );
};
export default Dashboard;
