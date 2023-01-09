//Generate ID

function generateId() {
    return Math.random().toString(36).substr(2, 12).toUpperCase();
  }
  
export { generateId }