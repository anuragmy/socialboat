import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TrainerVideoCard from "./trainerVideoCard";
import Loading from "./Loading";

const TrainerVideos = ({ video, loading }) => {
  const [videos, setVideos] = useState(video);

  useEffect(() => {
    if (video.length) {
      setVideos(video);
    }
  }, [video]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      videos,
      result.source.index,
      result.destination.index
    );

    setVideos(items);
  };

  return (
    <div className="flex justify-center">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div>
            <div className="flex flex-col">
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {videos.map((item, index) => (
                        <Draggable
                          key={item.etag}
                          draggableId={item.etag}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              className="mx-4 "
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TrainerVideoCard
                                key={item.etag}
                                id={item.id.videoId}
                                title={item.snippet.title}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
            {/* <div className="flex flex-col">
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {videos.map((item, index) => (
                        <Draggable
                          key={item.etag}
                          draggableId={item.etag}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TrainerVideoCard
                                key={item.etag}
                                id={item.id.videoId}
                                title={item.snippet.title}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div> */}
          </div>
        </>
      )}
    </div>
  );
};

export default TrainerVideos;
