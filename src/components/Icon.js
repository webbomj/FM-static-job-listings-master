import React, { useEffect, useState } from 'react';

const Icon = ({name, style}) => {
  let [icon, setIcon] = useState('');

  useEffect(() => {
    async function importIcon() {
      let importedIcon = await import(`../images/${name}.svg`);
      setIcon(importedIcon.default)
    }
    importIcon()

  }, [])
  
  return (
    <>
      <img src={icon} alt="logo" className={style} />
    </>
  );
};

export default Icon;