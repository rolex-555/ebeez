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
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Select,
} from '@windmill/react-ui';
import DatePicker from 'react-datepicker';
import './estimate.css';
import { IoTrashBin } from 'react-icons/io5';
import { CiCirclePlus } from 'react-icons/ci';

function NewEstimate() {
  const defaultArray = [
    {
      label: '',
      items: [
        {
          itemNameList: [],
          quantity: 0,
          price: 0,
          discount: 0,
          tax: 0,
          total: 0,
        },
      ],
    },
  ];
  const [itemsList, setitemsList] = useState(defaultArray);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [itemName, setItemName] = useState('');
  const [isCheckedLabel, setIsCheckedLabel] = useState(false);
  console.log(isCheckedLabel);
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div>
          <div className="w-full font-bold text-lg pb-4 pt-4">
            Create New Estimate
          </div>
          <div className="pb-4 font-medium">
            Dashboard / Manage Companies / Ebiew / New Estimate
          </div>
        </div>
        <div>
          <Button layout="link" className="bg-blue-500 h-10 hover:bg-blue-600">
            <span className="text-white">Submit</span>
          </Button>
        </div>
      </div>
      <div className="w-full pt-4 pb-12 w-full bg-white pl-8 pr-6">
        <div className="flex flex-row w-full justify-between">
          <div className="w-96">
            <Label>
              <span>Company Name</span>
              <Label className="mt-1">
                <div className="text-blue-500 text-lg font-semibold">Ebiew</div>
              </Label>
            </Label>
          </div>
          <div className="flex flex-row gap-4 mr-8">
            <div className="w-1/2 flex flex-col">
              <Label>
                <span className="text-sm text-gray-700 mb-1">Issue Date</span>
              </Label>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="rangePicker"
                placeholderText={'Start Time'}
                onKeyDown={(e) => e.preventDefault()}
              />
              <Label>
                <span className="text-xs text-gray-500 pl-2">
                  Please select issue date.
                </span>
              </Label>
            </div>
            <div className="w-1/2 flex flex-col">
              <Label>
                <span className="text-sm text-gray-700 mb-1">Due Date</span>
              </Label>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={endDate}
                minDate={startDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                className="rangePicker"
                placeholderText={'End Time'}
                onKeyDown={(e) => e.preventDefault()}
              />
              <Label>
                <span className="text-xs text-gray-500 pl-2">
                  Please select due date.
                </span>
              </Label>
            </div>
          </div>
        </div>
        <hr className="w-full border border-b-1 border-gray-200 my-8" />
        <TableContainer>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Discount (%)</TableCell>
                <TableCell>Tax (%)</TableCell>
                <TableCell>Total</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHeader>
            {itemsList.map((item) => (
              <TableBody>
                {item.label !== '' && (
                  <Label className="ml-5 text-lg">
                    <span>{item.label}</span>
                  </Label>
                )}
                <TableRow
                  style={{ border: 0 }}
                  className="border-t-0 !border-y-0"
                >
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <Select
                        placeholder="Select user Role"
                        className="mt-1 border border-gray-200 rounded-lg"
                      >
                        <option>Item</option>
                        <option>Item</option>
                      </Select>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      placeholder="0"
                      className="border border-gray-200 rounded-lg"
                    />
                  </TableCell>
                  <TableCell className="flex flex-row item-center gap-2">
                    <Input
                      type="number"
                      placeholder="0"
                      className="border border-gray-200 rounded-lg"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      placeholder="0"
                      className="border border-gray-200 rounded-lg"
                    />
                  </TableCell>
                  <TableCell>
                    {' '}
                    <Input
                      type="number"
                      placeholder="0"
                      className="border border-gray-200 rounded-lg"
                    />
                  </TableCell>

                  <TableCell>
                    <Input
                      type="number"
                      placeholder="0"
                      className="border border-gray-200 rounded-lg"
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex cursor-pointer w-6 h-6 justify-center items-center p-1 bg-blue-200 rounded-lg">
                      <IoTrashBin className="text-blue-500" />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
          <div className="mb-3 ml-3">
            <Button layout="link" onClick={() => setShowAddItemModal(true)}>
              <div className="flex flex-row items-center gap-2 text-blue-400 font-bold text-lg">
                <CiCirclePlus />
                Add item
              </div>
            </Button>
          </div>
          <TableFooter>
            <Pagination
              totalResults={10}
              resultsPerPage={4}
              onChange={() => {}}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      </div>
      <Modal
        isOpen={showAddItemModal}
        onClose={() => setShowAddItemModal(false)}
      >
        <ModalHeader>Add item</ModalHeader>
        <ModalBody>
          <div>
            <Label>
              <span>Add item name </span>
              <Label className="mt-4">
                <Input
                  onChange={(e) => setItemName(e.target.value)}
                  value={itemName}
                  placeholder="Enter item name"
                  className="mt-1 border border-gray-100"
                />
              </Label>
            </Label>
          </div>
          <div class="flex items-center mt-4 flex-row gap-2">
            <Input
              id="default-checkbox"
              type="checkbox"
              value={isCheckedLabel}
              onChange={(e) => setIsCheckedLabel(!isCheckedLabel)}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              This is new label for new item
            </label>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="w-full sm:w-auto" layout="outline">
            Cancel
          </Button>
          <Button
            className="w-full sm:w-auto"
            onClick={() => {
              const newItem = isCheckedLabel
                ? [
                    ...itemsList,
                    {
                      label: itemName,
                      items: [
                        {
                          itemName: [],
                          quantity: 0,
                          price: 0,
                          discount: 0,
                          tax: 0,
                          total: 0,
                        },
                      ],
                    },
                  ]
                : [
                    ...itemsList,
                    {
                      label: '',
                      items: [
                        {
                          itemNameList: [],
                          quantity: 0,
                          price: 0,
                          discount: 0,
                          tax: 0,
                          total: 0,
                        },
                      ],
                    },
                  ];
              console.log(newItem);
              setitemsList(newItem);
            }}
          >
            Add item
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default NewEstimate;
