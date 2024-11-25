import React from "react";
import { useOutletContext } from "react-router-dom";
function TracksPage() {
  const { results } = useOutletContext();
  console.log(results);
  return <div>TracksPage</div>;
} 

export default TracksPage;
