import * as React from 'react';
import { Button } from "@blueprintjs/core";
import './delete-plugin.scss';

interface DeletePluginProps {
  deleteCurrentPlugin: Function;
  setActivePlugin: Function;
}

const DeletePlugin = ({ deleteCurrentPlugin, setActivePlugin }: DeletePluginProps) => {
  return (
    <Button
      className="pt-button"
      id="delete-button-devdecks"
      type="button"
      onClick={ () => {
        deleteCurrentPlugin();
        setActivePlugin();
      }} >
      Delete
    </Button>
  );
}

export default DeletePlugin;
