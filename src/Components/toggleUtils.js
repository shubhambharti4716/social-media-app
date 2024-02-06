// toggleUtils.js
export const toggleContent = (id, setDetails) => {
    setDetails((prevDetails) => !prevDetails);
};

export const toggleReadMore = (id, setSelectedEvent) => {
    setSelectedEvent((prevEvent) => ({
        ...prevEvent,
        showFullContent: !prevEvent.showFullContent,
    }));
};

export const toggleCardContent = (id, setFilteredData, prevData) => {
    setFilteredData((prevData) =>
        prevData.map((post) =>
            post.id === id ? { ...post, showFullContent: !post.showFullContent } : post
        )
    );
};
