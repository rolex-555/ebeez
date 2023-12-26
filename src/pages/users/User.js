import React, { useState } from 'react';
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Pagination,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Select,
} from '@windmill/react-ui';
import { CiCirclePlus } from "react-icons/ci";


export default function User() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  return (
    <div>
      {' '}
      <div className="flex justify-end mb-8">
        <Button
          layout="link"
          className="bg-blue-400 hover:bg-blue-600"
          onClick={() => setIsModalOpen(true)}
        >
          <span className="text-white">+ Add new company user</span>
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell>User Role</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center text-sm">
                  {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                  <span className="font-semibold ml-2">Judith Ipsum</span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">$ 534.87</span>
              </TableCell>
              <TableCell>
                {/* <Badge type="success">success</Badge> */}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={10}
            resultsPerPage={4}
            onChange={() => {}}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalHeader className="flex flex-row justify-between mb-8 items-center">
          <div>Add new company user</div>
        { showContacts ? <Button
            layout="link"
            className="bg-blue-400 hover:bg-blue-600"
            onClick={() => setShowContacts(false)}
          >
            <span className="text-white">Back</span>
          </Button> : <Button
            layout="link"
            className="bg-blue-400 hover:bg-blue-600"
            onClick={() => setShowContacts(true)}
          >
            <span className="text-white">Contacts</span>
          </Button>}
        </ModalHeader>
        <ModalBody>
       {showContacts ? <div className='flex flex-row gap-4 items-center'>
               <div className='p-2 h-10 flex items-center bg-blue-100 rounded-lg cursor-pointer'>

           <CiCirclePlus className='w-6 h-6 text-blue-700 font-bold'/>
               </div>
           <div className='flex flex-row gap-20'>
        <div className='flex flex-col gap-2'>
        <div className='flex flex-row gap-1 font-semibold'><span className='text-blue-600 '>Name:</span> <span>Buvnesh Sharma</span></div>
        <div className='flex flex-row gap-1 font-semibold'><span className='text-blue-600 '>Email:</span> <span>bhuvi1@gmail.com</span></div>

        </div>
        <div className='flex flex-col gap-2'>
        <div className='flex flex-row gap-1 font-semibold'><span className='text-blue-600 '>Company Role:</span> <span></span></div>
        <div className='flex flex-row gap-1 font-semibold'><span className='text-blue-600 '>User Role:</span> <span></span></div>
        </div>
           </div>
        <div className='flex flex-row'>

        </div>
       </div>  :<div>
            <Label>
              <span>Name</span>
              <Label>
                <Input
                  placeholder="Name"
                  className="mt-1 border border-gray-200 rounded-lg"
                />
              </Label>
            </Label>
            <Label className="mt-2">
              <span>Email Id</span>
              <Label>
                <Input
                  placeholder="Email"
                  className="mt-1 border border-gray-200 rounded-lg"
                />
              </Label>
            </Label>
            <Label className="mt-2">
              <span>Phone Number</span>
              <Label>
                <Input
                  placeholder="Phone Number"
                  className="mt-1 border border-gray-200 rounded-lg "
                />
              </Label>
            </Label>
            <Label className="mt-2">
              <span>User Role</span>
              <Select
                placeholder="Select user Role"
                className="mt-1 border border-gray-200 rounded-lg"
              >
                <option>Admin</option>
                <option>Manager</option>
                <option>Accountant</option>
              </Select>
            </Label>
            <Label className="mt-2">
              <span>Street Address</span>
              <Label>
                <Input
                  placeholder="Address"
                  className="mt-1 border border-gray-200 rounded-lg"
                />
              </Label>
            </Label>
            <div className='flex flex-row w-full justify-between gap-4'>
            <Label className="mt-2 w-full">
              <span>Contry</span>
              <Select
                placeholder="Select user Role"
                className="mt-1 w-full border border-gray-200 rounded-lg"
              >
                <option>null</option>
              </Select>
            </Label>
            <Label className="mt-2 w-full">
              <span>State</span>
              <Select
                placeholder="Select user Role"
                className="mt-1 w-full border border-gray-200 rounded-lg"
              >
                <option>null</option>
              </Select>
            </Label>
            </div>
            <div className='flex flex-row w-full justify-between gap-4'>
            <Label className="mt-2 w-full">
              <span>City</span>
              <Select
                placeholder="Select user Role"
                className="mt-1 w-full border border-gray-200 rounded-lg"
              >
                <option>null</option>
              </Select>
            </Label>
            <Label className="mt-2 w-full">
              <span>Pincode</span>
              <Label>
                <Input
                  placeholder="Pincode"
                  className="mt-1 border border-gray-200 rounded-lg "
                />
              </Label>
            </Label>
            </div>
          </div>}
        </ModalBody>
      {!showContacts &&  <ModalFooter>
          <Button className="w-full sm:w-auto" layout="outline">
            Cancel
          </Button>
          <Button className="w-full sm:w-auto">Add user</Button>
        </ModalFooter>}
      </Modal>
    </div>
  );
}
