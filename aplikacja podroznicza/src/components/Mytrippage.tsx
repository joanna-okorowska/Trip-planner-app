
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useEffect, useState, ChangeEvent } from "react";
import { Outlet, useNavigate, useParams  } from "react-router-dom";
import {
    BoxList,
    Global,
    Title,
    TripContainer,
    BoxButton,
    AddTripsContainer,
    TripListController,
    TripListCheckbox,
    TripListWrapper,
    TripListItem,
    TripList,
    TripListItemWrapper,
    ModalContent,
    Buttonswrapper,
    Headermodal
  } from "../Styles/Mytrippage.styled";
  import { TripDay } from "./tripday";
  import { Modal } from './Modal';
import { Dispatch } from "react";
import { SetStateAction } from "react";

  interface IMytrippage {
    currentTrip: IItem[][],
    setCurrentTrip: Dispatch<SetStateAction<IItem[][]>>,
   
  }

  interface IItem {
    id: string,
    name: string,
    selected: boolean
  }

  interface IAddTrips {
    items: IItem[],
    currentTrip: IItem[][],
    setCurrentTrip: Dispatch<SetStateAction<IItem[][]>>
  }
  
  export function Mytrippage({currentTrip, setCurrentTrip} : IMytrippage) {
    const [selectedDay, setSelectedDay] = useState("");

    const navigate = useNavigate();
  const navigatetologin= () => {
    navigate("/signIn");
  };
  const navigateToCreate = () => {
    navigate("/create-new-trip");
  };

  const handleIncreaseDays = () => {
    currentTrip.push([]);
    setCurrentTrip([...currentTrip]);
  }

  const handleDelete = (dayIndex: number) => {
    setCurrentTrip(currentTrip.filter((item, index) => index !== dayIndex));
  }

    return (
      <TripContainer>
        
        <Global />
          <Title>Plan my trip</Title>
        <BoxList>
          {currentTrip.map((items, index) => {
              return (
                <TripDay key={index + 1} 
                        dayNo={(index + 1).toString()} 
                        selectedDay={selectedDay} 
                        setSelectedDay={setSelectedDay} 
                        items={items} 
                        onDelete={() => handleDelete(index)}
                        deleteDisabled={currentTrip.length === 1}
                >
                </TripDay>
              )
          })}
            <div>
             <BoxButton onClick={handleIncreaseDays}>+</BoxButton>
            </div>
        </BoxList>
        <Outlet />
      </TripContainer>
    );
  }

  export const AddTrips = ({items, currentTrip, setCurrentTrip}:IAddTrips) => {
    const [selectedTrips, setSelectedTrips] = useState<IItem[]>([]);
    const navigate = useNavigate();
    let { day } = useParams();

    const handleChange = (e : ChangeEvent<HTMLInputElement>, item : IItem) => {
      const value = e.target.checked;
      item.selected = value;
      if(value === true){
          const _selectedTrips = [
              ...selectedTrips,
              item
          ]
          setSelectedTrips(_selectedTrips);
      }else{
          const _selectedTrips = selectedTrips.filter(tripToRemove => tripToRemove.id !== item.id);
          setSelectedTrips(_selectedTrips);
      }
  }



  const handleBack = () => {
    navigate('/creator');
  }

  const handleAddTo = () => {
    let reg = /^\d+$/;
    day = day || '';
    if(reg.test(day)){
      currentTrip[parseInt(day) - 1] = selectedTrips;
      setCurrentTrip([...currentTrip]);
    }
    navigate('/creator');
  }

  const getDayNumber = () => {
    let reg = /^\d+$/;
    day = day || '';
    return parseInt(day);
  }

  const processItems = () => {
    items.forEach(item => {
      const selectedTrip = selectedTrips.find(trip => trip.id === item.id);
      if(selectedTrip){
        item.selected = selectedTrip.selected;
      }
    });
    return items;
  }

  useEffect(() => {
    setSelectedTrips([...currentTrip[getDayNumber() - 1]]);
  }, [])

  console.log(processItems())

    return (
      <Modal className="portal" element="div">
        <AddTripsContainer>
        <Headermodal><h3>Add trips</h3></Headermodal>  
          <ModalContent>
          <TripList>
              {items && processItems().map(item => {
                const { id, name, selected } = item;
                return (
                  <li key={id}>
                  <TripListController>
                      <TripListCheckbox type="checkbox" checked={selected} onChange={(e) => handleChange(e, item)}></TripListCheckbox>
                      <TripListItem>
                          <span>{name}</span>
                      </TripListItem>
                  </TripListController>
              </li>
                )
              })}
            </TripList>
            <Buttonswrapper>
              <button className="btnback" onClick={handleBack}>
                  Back
              </button>
              <button className="btnaddto" onClick={handleAddTo}>
                  Add to 
              </button>
              </Buttonswrapper>
          </ModalContent>
        
        </AddTripsContainer>
      </Modal>
    )
  }