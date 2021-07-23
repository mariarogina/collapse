import React, { useState } from "react";
import Collapse from "./Collapse";

export default function CollapseWrap() {
  const [isExpanded, setExpanded] = useState(true);

  const handleExpandedChange = () => setExpanded(!isExpanded);

  return (
    <Collapse
      collapsedLabel="Подробнее"
      expandedLabel="Скрыть"
      isExpanded={isExpanded}
      onExpandedChange={handleExpandedChange}
    >
      <p>
        Когда же я возвращался около полудня домой, луг был опять весь золотой.
        Я стал наблюдать. К вечеру луг опять позеленел.
      </p>
    </Collapse>
  );
}
