import React from 'react';
import {
    TableContainer,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TableFooter,
    Pagination,
    Input,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Select,
  } from '@windmill/react-ui';

function CompanyDetails() {
  return (
    <div>
        <div className='w-full flex justify-end mb-8'>

         <Button layout="link" className="bg-blue-500 h-10 hover:bg-blue-600">
          <span className="text-white">Edit Company</span>
        </Button>
        </div>
        <div className='w-full pt-4 pb-12 bg-white pl-8'>

      <div className="flex flex-row gap-4">
        <div className="w-96">
          <Label>
            <span>Company Name</span>
            <Label className="mt-1">
              <div className="text-blue-500 text-lg font-semibold">Ebiew</div>
            </Label>
          </Label>
        </div>
        <div>
          <Label>
            <span>Category Name</span>
            <Label className="mt-1">
              <div className="text-blue-500 text-lg font-semibold">
                Hotel Resort
              </div>
            </Label>
          </Label>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-12">
        <div className="w-96">
          <Label>
            <span>Street Address</span>
            <Label className="mt-1">
              <div className="text-blue-500 text-lg font-semibold">k199</div>
            </Label>
          </Label>
        </div>
        <div className="w-96">
          <Label>
            <span>City</span>
            <Label className="mt-1">
              <div className="text-blue-500 text-lg font-semibold">
                Palm City
              </div>
            </Label>
          </Label>
        </div>
        <div>
          <Label>
            <span>State</span>
            <Label className="mt-1">
              <div className="text-blue-500 text-lg font-semibold">
                Florida
              </div>
            </Label>
          </Label>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-12">
        <div className="w-96">
          <Label>
            <span>Country</span>
            <Label className="mt-1">
              <div className="text-blue-500 text-lg font-semibold">United States</div>
            </Label>
          </Label>
        </div>
        <div>
          <Label>
            <span>Pin Code</span>
            <Label className="mt-1">
              <div className="text-blue-500 text-lg font-semibold">
                54455
              </div>
            </Label>
          </Label>
        </div>
      </div>
        </div>
    </div>
  );
}

export default CompanyDetails;
