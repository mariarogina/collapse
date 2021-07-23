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
        Альфа-Банк, основанный в 1990 году, является универсальным банком,
        осуществляющим все основные виды банковских операций, представленных на
        рынке финансовых услуг, включая обслуживание частных и корпоративных
        клиентов, инвестиционный банковский бизнес, торговое финансирование
        и т.д.
      </p>
    </Collapse>
  );
}
