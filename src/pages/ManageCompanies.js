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
import dummyImage from '../assets/img/dummyDashboardImage.jpg';
import { UploadIcon } from '../assets/img/icons';
import { toast } from 'react-toastify';

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
            <Tab className="tabs">Orders</Tab>
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
              <div className="flex flex-wrap items-center gap-8">
                {labelList.map((item) =>
                  item.type === 'dropdown' ? (
                    <Label>
                      <Label>
                        {' '}
                        <span>{item.labelName}</span>
                      </Label>
                      {item.dropDownList?.length > 0 ? (
                        <Select className="mt-1">
                          {item.dropDownList?.map((drop)=>(
                             <option>{drop}</option>
                          ))}
                        </Select>
                      ) : (
                        <Button layout="outline" onClick={()=>setIsModalOpenDrop(true)}>add drowndown feild</Button>
                      )}
                    </Label>
                  ) : (
                    <Label>
                      <Label>
                        {' '}
                        <span>{item.labelName}</span>
                      </Label>
                      <Input
                        className="inputWrapper"
                        placeholder={item.labelName}
                        aria-label="Search"
                      />
                    </Label>
                  )
                )}
              </div>
            </div>
            <div className="mt-6">
              <Button layout="outline" onClick={() => openModal(true)}>
                + Add new feild
              </Button>
            </div>
          </TabPanel>
          <TabPanel className="mt-4">
            <TableContainer>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>Client</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
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
          </TabPanel>

          <TabPanel className="mt-4"></TabPanel>
          <TabPanel className="mt-4"></TabPanel>
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
                },
              ]);
              closeModal();
            }}
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={isModalOpenDrop} onClose={()=>setIsModalOpenDrop(false)}>
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
    <Button className="w-full sm:w-auto" layout="outline" >
      Cancel
    </Button>
    <Button className="w-full sm:w-auto" onClick={()=>{
      const filterDropDown=labelList.filter((filt)=>filt.type==='dropDown')?.[0]
      const nonFilterDropDown=labelList.filter((filt)=>filt.type!=='dropDown')
      setLabelList([...nonFilterDropDown,{
        ...filterDropDown,
        dropDownList:[newLabel]
      }])
      setIsModalOpenDrop(false)
    }}>Add feild</Button>
  </ModalFooter>
</Modal>
    </div>
  );
}
