import React, { useState, useEffect } from 'react';

function MountUnmountComponent() {
  useEffect(() => {
    console.log("Component Mounted");
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return <div>This component logs on mount and unmount.</div>;
}

export default MountUnmountComponent;