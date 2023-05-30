import EditorTopBar from "../../../editor/EditorTopBar";
import {Ui} from "../../../../lib/ui/ui";

import React from "react";
import LeftMenuEditorComponent from "../../../editor/LeftMenuEditorComponent";

export const EditorCreateCtml = () => {

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: '80px',
    paddingRight: '80px',
    paddingTop: '20px',
  }



  return (
    <>
      <EditorTopBar />

      <div style={containerStyle}>
        {/*<Tree value={nodes} />*/}
        <LeftMenuEditorComponent />
        <Ui></Ui>
      </div>

    </>
  )
}
export default EditorCreateCtml;

