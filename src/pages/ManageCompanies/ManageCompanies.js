import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './manage.css';
import 'react-tabs/style/react-tabs.css';
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
import dummyImage from '../../assets/img/dummyDashboardImage.jpg';
import { UploadIcon } from '../../assets/img/icons';
import { toast } from 'react-toastify';
import { FaCheckCircle } from "react-icons/fa";
import User from '../users/User';
import CompanyDetails from '../CompanyDetails/CompanyDetails';
import Estimates from '../Estimates/Estimates';

export default function ManageCompanies() {
  const label = [
    {
      type: 'input',
      labelName: 'DVR DDNS',
    },
    {
      type: 'input',
      labelName: 'DVR QR',
    },
    {
      type: 'input',
      labelName: 'DVR IP',
    },
    {
      type: 'input',
      labelName: 'DVR PORT',
    },
    {
      type: 'input',
      labelName: 'DVR U.N.',
    },
    {
      type: 'input',
      labelName: 'DVR PSW',
    },
  ];
  const [labelList, setLabelList] = useState(label);
  const [file, setFile] = useState();
  const [newLabel, setNewLabel] = useState('');
  const [isDropDown, setIsDropDown] = useState(false);
  const [showDropDownValue, setShowDropDownValue] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDrop, setIsModalOpenDrop] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  function hasExtension(inputID, exts) {
    var fileName = document.getElementById(inputID).value;
    return new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$').test(
      fileName
    );
  }
  const handleChangeFileRouteUpload = (e, htmltag) => {
    console.log(e.target.file);
    if (hasExtension(htmltag, ['.jpg', '.jpeg', '.png', '.svg'])) {
      setFile(URL.createObjectURL(e.target.files[0]));
      const uploadData = {
        fileName: 'breakfast',
        fileType: 'image',
        mimeType: 'image/png',
        collectionName: 'coupons',
      };
      setFile(e.target.file);
    } else {
      toast.error('Please select correct file format');
    }
  };
  console.log(labelList);
  return (
    <div>
      <div className="w-full font-bold text-lg pb-4 pt-4">Ebview</div>
      <div className="pb-4 font-semibold">
        Dashboard / Manage Companies / Ebview
      </div>
      <div className="w-full pb-4 mt-4">
        <Tabs lassName="w-full">
          <TabList className="tabList">
            <Tab className="tabs">Dashboard</Tab>
            <Tab className="tabs">Users</Tab>
            <Tab className="tabs">Company Details</Tab>
            <Tab className="tabs">Estimates</Tab>
            <Tab className="tabs">Invoices</Tab>
            <Tab className="tabs">Notes</Tab>
            <Tab className="tabs">Tickets</Tab>
            <Tab className="tabs">Project Progress</Tab>
            <Tab className="tabs">History</Tab>
          </TabList>
          <TabPanel className="mt-4">
            <div className="w-full text-center text-xl mt-8 font-bold">
              Ebiview
            </div>
            <div className="w-full text-center text-lg mt-4 font-semibold">
              k199, Palm City, 54455, Florida United States
            </div>
            <div className="flex flex-row gap-12 mt-8 items-center">
              <div className="uploaderContainer">
                <div className="uploadWrapper">
                  <label htmlFor="fileUpload" className="labelClass">
                    {/* {(file) ? ( */}
                    <>
                      <div className="relative w-full !h-[250px]">
                        <img
                          alt=""
                          style={{ height: '100%', width: '100%' }}
                          src={file || dummyImage}
                          onError={() => {
                            setFile(null);
                          }}
                        />
                      </div>
                    </>
                    {/* ) : (
              <div className="iconContainer">
                <UploadIcon />
                <p className="iconHeading">
                  <span className="font-semibold">Click to upload</span>
                </p>
                <p className="iconSubHeading">SVG, PNG, JPG, JPEG</p>
              </div> */}
                    {/* )} */}
                    <input
                      id="fileUpload"
                      type="file"
                      onChange={handleChangeFileRouteUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap items-end gap-8">
                {labelList.map((item) =>
                  item.type === 'dropdown' ? (
                    <Label className="w-64">
                      <Label>
                        {' '}
                        <span>{item.labelName}</span>
                      </Label>
                      {item.dropdownList?.length > 0 ? (
                        <div className="flex flex-row gap-4">
                          <Select onChange={() => {
                                  if ( item.dropdownList?.length - 1)
                                    setShowDropDownValue(true);
                                }} className="mt-1 border border-gray-200 rounded-lg">
                            {item.dropdownList?.map((drop, index) => (
                              <option
                                className="w-[250px]"
                              >
                                {drop}
                              </option>
                            ))}
                          </Select>
                         
                        </div>
                      ) : (
                        <Button
                          layout="outline"
                          onClick={() => setIsModalOpenDrop(true)}
                        >
                          add drowndown feild
                        </Button>
                      )}
                    </Label>
                  ) : (
                    <Label>
                      <Label>
                        {' '}
                        <span>{item.labelName}</span>
                      </Label>
                      <Input
                        className="inputWrapper border border-gray-200 rounded-lg"
                        placeholder={item.labelName}
                        aria-label="Search"
                      />
                    </Label>
                  )
                )}
                 {showDropDownValue && (
                            <div className="flex flex-row justify-between items-end border border-gray-200 rounded-lg w-64 gap-4 p-1 h-[38px] bg-white px-1">
                              <Input
                                onChange={(e) => setNewLabel(e.target.value)}
                                value={newLabel}
                                placeholder="Enter dropdown Value"
                                className="!focus:border-0"
                              />
                              <div
                              className='p-1 border border-gray-200 items-center bg-blue-200 text-blue-700 rounded-lg cursor-pointer'
                                onClick={() => {
                                  let indexOfObject = labelList.findIndex(
                                    (obj) => obj.type === 'dropdown'
                                  );

                                  // Check if the object exists at the specified index
                                  if (indexOfObject !== -1) {
                                    // Check if the object has the 'dropdownList' property
                                    if (
                                      !labelList[indexOfObject].hasOwnProperty(
                                        'dropdownList'
                                      )
                                    ) {
                                      // If not, create the 'dropdownList' property with an empty array
                                      labelList[indexOfObject].dropdownList =
                                        [];
                                    }

                                    // Add a new item to the 'dropdownList'
                                    labelList[indexOfObject].dropdownList.unshift(
                                      newLabel
                                    );
                                    setLabelList(labelList);
                                    setNewLabel('');
                                    setShowDropDownValue(false)
                                  } else {
                                    console.log(
                                      'Object not found in the array.'
                                    );
                                  }
                                }}
                              >
                                Add
                              </div>
                            </div>
                          )}
              </div>
            </div>
            <div className="mt-6 flex flex-row justify-between">
              <Button layout="link" className="bg-blue-200" onClick={() => openModal(true)}>
                + Add new feild
              </Button>
              <div onClick={()=>toast.error('Please update feild')} className='flex flex-row items-center gap-2 text-green-400 cursor-pointer'>
                Save changes <FaCheckCircle />
              </div>
            </div>
          </TabPanel>
          <TabPanel className="mt-4">
           <User/>
          </TabPanel>

          <TabPanel className="mt-4">
            <CompanyDetails/>
          </TabPanel>
          <TabPanel className="mt-4">
            <Estimates/>
          </TabPanel>
          <TabPanel className="mt-4"></TabPanel>
        </Tabs>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader className="text-center">Add new feild</ModalHeader>
        <ModalBody className="mt-8">
          {isDropDown ? (
            <div>
              <Label>
                <span>Add label for drop down</span>
                <Label className="mt-4">
                  <Input
                    onChange={(e) => setNewLabel(e.target.value)}
                    value={newLabel}
                    placeholder="Enter label name"
                    className="mt-1 border border-gray-100"
                  />
                </Label>
              </Label>
            </div>
          ) : (
            <div>
              Add input component with label
              <Label className="mt-4">
                <Input
                  onChange={(e) => setNewLabel(e.target.value)}
                  value={newLabel}
                  placeholder="Enter label name"
                  className="mt-1 border border-gray-100"
                />
              </Label>
            </div>
          )}
          {!isDropDown && (
            <Button
              className="h-[20px] mt-8"
              size="small"
              layout="outline"
              onClick={() => setIsDropDown(true)}
            >
              + Add dropdown
            </Button>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-full sm:w-auto"
            layout="outline"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            className="w-full sm:w-auto"
            onClick={() => {
              setLabelList([
                ...labelList,
                {
                  type: isDropDown ? 'dropdown' : 'input',
                  labelName: newLabel,
                  dropDownList: isDropDown ? [] : null,
                },
              ]);
              setNewLabel('');
              closeModal();
            }}
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={isModalOpenDrop} onClose={() => setIsModalOpenDrop(false)}>
        <ModalHeader>Add dropdown feild</ModalHeader>
        <ModalBody>
          <div>
            <Label>
              <span>Add feild for drop down</span>
              <Label className="mt-4">
                <Input
                  onChange={(e) => setNewLabel(e.target.value)}
                  value={newLabel}
                  placeholder="Enter feild name"
                  className="mt-1 border border-gray-100"
                />
              </Label>
            </Label>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="w-full sm:w-auto" layout="outline">
            Cancel
          </Button>
          <Button
            className="w-full sm:w-auto"
            onClick={() => {
              let indexOfObject = labelList.findIndex(
                (obj) => obj.type === 'dropdown'
              );

              // Check if the object exists at the specified index
              if (indexOfObject !== -1) {
                // Check if the object has the 'dropdownList' property
                if (!labelList[indexOfObject].hasOwnProperty('dropdownList')) {
                  // If not, create the 'dropdownList' property with an empty array
                  labelList[indexOfObject].dropdownList = [];
                }

                // Add a new item to the 'dropdownList'
                labelList[indexOfObject].dropdownList.push(
                  newLabel,
                  'Add new value'
                );
                setLabelList(labelList);
                setNewLabel('');
                // Display the updated array of objects
                console.log(labelList);
              } else {
                console.log('Object not found in the array.');
              }
              setIsModalOpenDrop(false);
            }}
          >
            Add feild
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
