export let dummyData = {
  "1ba9f268-e4e5-4c66-a066-853ad2406108":
    '{"id":"1ba9f268-e4e5-4c66-a066-853ad2406108","isFavorite":true,"colors":["#1BABE4","#209A26","#359440","#8612C2","#DB68BD"]}',
  "3574af43-b242-4653-bfa6-aa5c54a8e835":
    '{"id":"3574af43-b242-4653-bfa6-aa5c54a8e835","isFavorite":false,"colors":["#8C7533","#B22E56","#F3C60F","#D156A9","#3AFB9A"]}',
  "3cd0439b-6fb5-4ae7-98b5-527e3abd58ac":
    '{"id":"3cd0439b-6fb5-4ae7-98b5-527e3abd58ac","isFavorite":false,"colors":["#D12AA8","#571D4B","#1C1058","#B08DED","#3FAD8D"]}',
  "0ab63637-2caf-4565-9c96-a35289485e65":
    '{"id":"0ab63637-2caf-4565-9c96-a35289485e65","isFavorite":false,"colors":["#8C7BDD","#5C674C","#180B8A","#580C3E","#42D53C"]}',
  "c650125c-feac-44b7-8f2a-c3e0fa07d09b":
    '{"id":"c650125c-feac-44b7-8f2a-c3e0fa07d09b","isFavorite":false,"colors":["#0F8DE6","#479D32","#134088","#F30604","#449EAB"]}',
  "bf3f1d0b-6070-4791-b675-d738f2111730":
    '{"id":"bf3f1d0b-6070-4791-b675-d738f2111730","isFavorite":false,"colors":["#B71D3E","#B53039","#7C173A"]}',
  "bcf05f56-a291-4b25-90be-f8e61403919d":
    '{"id":"bcf05f56-a291-4b25-90be-f8e61403919d","isFavorite":false,"colors":["#F4D8ED","#EEF262","#C6D0E3","#D0F105","#AEBC12"]}',
  "3c36cc46-17f6-47a2-8576-07cab0329f82":
    '{"id":"3c36cc46-17f6-47a2-8576-07cab0329f82","isFavorite":false,"colors":["#3CD35A","#9C951F"]}',
  "f1ae1009-fadd-4726-aa41-e50d9947b05b":
    '{"id":"f1ae1009-fadd-4726-aa41-e50d9947b05b","isFavorite":false,"colors":["#DDA807","#CBFD25","#3245B0","#CD89EC","#A6C793"]}',
  "936c5cc2-675d-46be-abac-8647746a6343":
    '{"id":"936c5cc2-675d-46be-abac-8647746a6343","isFavorite":true,"colors":["#0E99FC","#F5A976","#C96C49","#170580","#FB1D4B"]}',
  allColors:
    '["db95463e-87b3-48c6-b682-41bb556ac57a","d403e81b-2641-4b9b-9cca-10a651395a27","5af131c6-3fa4-4812-9e40-52a3982b6c6d","452ac0f3-e98e-4ba7-865a-11a05e4000ea","9e1ddbaa-fcc9-4808-89b6-af40d7872ad0","0ab63637-2caf-4565-9c96-a35289485e65","342c5327-fd73-46ae-83b8-f1fa868bff2f","bf3f1d0b-6070-4791-b675-d738f2111730","3c36cc46-17f6-47a2-8576-07cab0329f82","1ba9f268-e4e5-4c66-a066-853ad2406108","bcf05f56-a291-4b25-90be-f8e61403919d","28914d98-a8d6-4b83-9980-650417b2784e","936c5cc2-675d-46be-abac-8647746a6343","c650125c-feac-44b7-8f2a-c3e0fa07d09b","3574af43-b242-4653-bfa6-aa5c54a8e835","3cd0439b-6fb5-4ae7-98b5-527e3abd58ac","f1ae1009-fadd-4726-aa41-e50d9947b05b"]',
  "28914d98-a8d6-4b83-9980-650417b2784e":
    '{"id":"28914d98-a8d6-4b83-9980-650417b2784e","isFavorite":false,"colors":["#0444CC","#9C1A33","#35FF7B","#67DE1D","#D2C234"]}',
  "9e1ddbaa-fcc9-4808-89b6-af40d7872ad0":
    '{"id":"9e1ddbaa-fcc9-4808-89b6-af40d7872ad0","isFavorite":false,"colors":["#1A2383","#0A79C4","#D30C48","#989B1D","#2DD6AD"]}',
  "342c5327-fd73-46ae-83b8-f1fa868bff2f":
    '{"id":"342c5327-fd73-46ae-83b8-f1fa868bff2f","isFavorite":false,"colors":["#753947","#5A0A58","#1A9C77","#43A9E6"]}',
};
export function loadDummyData() {
  if (!(localStorage.getItem("dump") || null)) {
    Object.keys(dummyData).map((key) => {
      localStorage.setItem(
        key,
        (dummyData as any)[key]
      );
    });
    localStorage.setItem("dump", "done");
  }
}
