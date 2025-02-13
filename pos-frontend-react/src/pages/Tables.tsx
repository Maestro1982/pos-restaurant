import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';

import BackButton from '../components/shared/BackButton';
import BottomNav from '../components/shared/BottomNav';
import TableCard from '../components/tables/TableCard';

import { ApiResponse, getTables, updateTable } from '../https';

import { RootState } from '../redux/store';

interface UpdateTableData {
  _id: string;
  status: string; // 'Available' or 'Booked'
  currentOrder?: {
    customerDetails: {
      name: string;
      phone: string;
      guests: number;
    };
  };
}

interface CustomerDetails {
  name: string;
  phone: string;
  guests: number;
}

interface CurrentOrder {
  customerDetails: CustomerDetails;
}

interface Table {
  _id: string;
  name: string;
  tableNr: string;
  status: string;
  initial?: string; // Optional, since we will extract it from currentOrder
  seats: number;
  currentOrder?: CurrentOrder; // Make it optional to prevent errors when undefined
}

const Tables = () => {
  const [status, setStatus] = useState<string>('all');
  const navigate = useNavigate();
  // Get customer details from Redux
  const customerDetails = useSelector((state: RootState) => state.customer);

  // Fetch tables data
  const { data: resData } = useQuery({
    queryKey: ['tables'],
    queryFn: async () => {
      return await getTables();
    },
  });

  // Mutation to update table status
  const mutation = useMutation<
    AxiosResponse<ApiResponse>, // The response type from the mutation
    Error, // The error type
    UpdateTableData // The type of the data the mutation function will receive
  >({
    mutationFn: updateTable, // Use `mutationFn` instead of passing the function directly
    onSuccess: (response: AxiosResponse<ApiResponse>) => {
      console.log('API Response:', response.data);
      // Use proper typing for the `response` argument
      if (response.data.success) {
        enqueueSnackbar('Table booked successfully!', { variant: 'success' });
        navigate('/menu');
      } else {
        enqueueSnackbar(response.data.message || 'Failed to book table!', {
          variant: 'error',
        });
      }
    },
    onError: (error) => {
      console.error('API Error:', error);
      enqueueSnackbar('Failed to update table!', { variant: 'error' });
    },
  });

  // Handle table selection
  const handleTableSelect = (table: Table) => {
    console.log('Customer Details Before Booking:', customerDetails);

    if (
      !customerDetails.customerName ||
      !customerDetails.customerPhone ||
      !customerDetails.guests
    ) {
      enqueueSnackbar(
        'Please provide customer details before selecting a table!',
        { variant: 'error' }
      );
      return;
    }

    const payload: UpdateTableData = {
      _id: table._id,
      status: 'Booked',
      currentOrder: {
        customerDetails: {
          name: customerDetails.customerName,
          phone: customerDetails.customerPhone,
          guests: customerDetails.guests,
        },
      },
    };

    console.log('Payload Sent to API:', payload);

    mutation.mutate(payload);
  };

  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
      <div className='flex items-center justify-between px-10 py-4 mt-2'>
        <div className='flex items-center gap-4'>
          <BackButton />
          <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>
            Tables
          </h1>
        </div>
        <div className='flex items-center justify-around gap-4'>
          <button
            className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${
              status === 'all' && 'bg-[#383838]'
            }`}
            onClick={() => setStatus('all')}
          >
            All
          </button>
          <button
            className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${
              status === 'booked' && 'bg-[#383838]'
            }`}
            onClick={() => setStatus('booked')}
          >
            Booked
          </button>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-4 px-16 py-4 overflow-y-scroll scrollbar-hide h-[70vh] w-full max-w-[calc(100%-8rem)] mx-auto'>
        {resData?.data.data
          .slice() // Make a copy to avoid mutating original data
          .sort((a: Table, b: Table) => Number(a.tableNr) - Number(b.tableNr)) // Numeric sort
          .filter((table: Table) => {
            if (status === 'all') return true;
            return table.status === status; // Filter by status
          })
          .map((table: Table) => {
            return (
              <TableCard
                key={table._id}
                id={table._id}
                name={table.tableNr}
                status={table.status}
                initial={table.currentOrder?.customerDetails?.name || ''}
                seats={table.seats}
                onSelect={() => handleTableSelect(table)} // Attach the selection handler to the table card
              />
            );
          })}
      </div>
      <BottomNav />
    </section>
  );
};

export default Tables;
