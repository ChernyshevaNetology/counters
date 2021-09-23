import React from "react";

const MasterReset = ({onMasterReset, totalCount}) => {

    return (
        <button
            onClick={onMasterReset}
            className={"btn btn-primary"}
        disabled={totalCount===0}
        >
            MASTER RESET
        </button>
    );
};

export default MasterReset;
