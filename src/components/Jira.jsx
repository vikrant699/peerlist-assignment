/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import {
  MdOutlineRemoveCircle,
  MdOutlineCircle,
  MdCheckCircle,
} from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { candidateInfo } from "../data/candidateInfo";
import CandidateInfo from "./smallerComponents/CandidateInfo";

const reorder = (list, itemId, destinationIndex) => {
  const result = Array.from(list);
  const startIndex = result.findIndex((item) => item.id === itemId);

  if (startIndex !== -1) {
    const [removed] = result.splice(startIndex, 1);
    result.splice(destinationIndex, 0, removed);
  }

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  margin: 4,
  ...draggableStyle,
});

const Candidates = () => {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([[], candidateInfo, []]);
  const [results, setResults] = useState(data);

  const renderData = keyword.trim() === "" ? data : results;

  useEffect(() => {
    const sanitizedKeyword = keyword
      .toLowerCase()
      .replace(" ", "")
      .replace("+", "");

    const results = data.map((arr) => {
      return arr.filter((obj) => {
        const sanitizedName = obj.name?.toLowerCase().replace(" ", "");
        const sanitizedPhone = obj.phone?.replace(" ", "").replace("+", "");
        const sanitizedEmail = obj.email?.toLowerCase().replace(" ", "");
        const sanitizedPosition = obj.currentPosition
          ?.toLowerCase()
          .replace(" ", "");

        return (
          sanitizedName?.includes(sanitizedKeyword) ||
          sanitizedPhone?.includes(sanitizedKeyword) ||
          sanitizedEmail?.includes(sanitizedKeyword) ||
          sanitizedPosition?.includes(sanitizedKeyword)
        );
      });
    });

    setResults(results);
  }, [keyword, data]);

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const onDragEnd = (result, stateVariable, setStateVariable) => {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;
    const newState = [...stateVariable];

    if (sInd === dInd) {
      const items = reorder(newState[sInd], draggableId, destination.index);
      newState[sInd] = items;
    } else {
      const newSource = [...newState[sInd]];
      const newDestination = [...newState[dInd]];

      const removedIndex = newSource.findIndex(
        (item) => item.id === draggableId
      );

      if (removedIndex !== -1) {
        const [removed] = newSource.splice(removedIndex, 1);
        newDestination.splice(destination.index, 0, removed);
      }

      newState[sInd] = newSource;
      newState[dInd] = newDestination;
    }

    setStateVariable(newState);
  };

  const changePositions = (result) => {
    console.log(result.destination);
    onDragEnd(result, data, setData);
    onDragEnd(result, results, setResults);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex items-center"
        style={{ width: 924, paddingTop: 24, paddingBottom: 24 }}
      >
        <FiSearch className="ml-3" size={16} color="#0D0D0D" />
        <input
          type="text"
          value={keyword}
          onChange={handleInputChange}
          placeholder="Search candidates"
          className="pl-2 bg-white focus:outline-none h-[24px]"
        />
      </div>
      <div className="flex space-x-[8px]">
        <DragDropContext onDragEnd={changePositions}>
          {renderData.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              {(provided, snapshot) => {
                return (
                  <div
                    className={`rounded-md border border-solid ${
                      ind === 0
                        ? `border-[#FFEAEA]`
                        : ind === 1
                        ? `border-[#E1E4E8]`
                        : `border-[#E2F5EA]`
                    }`}
                    {...provided.droppableProps}
                  >
                    <div
                      className={`flex rounded-tl-md rounded-tr-md  items-center -mt-[4px] ${
                        ind === 0
                          ? `bg-[#FFEAEA]`
                          : ind === 1
                          ? `bg-[#E1E4E8]`
                          : `bg-[#E2F5EA]`
                      } p-[6px] space-x-1`}
                      style={{ width: "100%", height: 32 }}
                    >
                      {ind === 0 && (
                        <MdOutlineRemoveCircle
                          color="#EB5757"
                          className="w-[16px]"
                        />
                      )}
                      {ind === 1 && <MdOutlineCircle className="w-[16px]" />}
                      {ind === 2 && (
                        <MdCheckCircle color="#219653" className="w-[16px]" />
                      )}
                      <p
                        className={`text-[10px] leading-16 font-medium tracking-wider ${
                          ind === 0
                            ? "text-[#EB5757]"
                            : ind === 1
                            ? ""
                            : "text-[#219653]"
                        }`}
                      >{`${
                        ind === 0
                          ? "REJECTED"
                          : ind === 1
                          ? "APPLIED"
                          : "SHORTLISTED"
                      } • ${data[ind].length}`}</p>
                    </div>
                    <div
                      ref={provided.innerRef}
                      className={`p-[4px]`}
                      style={{ minWidth: 308, minHeight: "100%" }}
                    >
                      {el.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => {
                            return (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                  snapshot.isDragging,
                                  provided.draggableProps.style
                                )}
                              >
                                <CandidateInfo
                                  avatar={item.avatar}
                                  name={item.name}
                                  referredBy={
                                    item.referredBy ? item.referredBy : {}
                                  }
                                  currentPosition={item.currentPosition}
                                  experience={item.experience}
                                  holdingOffer={item.holdingOffer}
                                  noticePeriod={item.noticePeriod}
                                  peerlistMatch={
                                    item.peerlistMatch
                                      ? item.peerlistMatch
                                      : false
                                  }
                                  applied={item.applied}
                                  email={item.email}
                                  phone={item.phone}
                                  destination={ind}
                                />
                              </div>
                            );
                          }}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  </div>
                );
              }}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
};

export default Candidates;
