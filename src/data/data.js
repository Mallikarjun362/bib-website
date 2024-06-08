export const title = "BIB Blockchain bootcamp";
export const subtitle = "IIT Bhilai";
export const description = "3-month online blockchain bootcamp starting from May 14th. Learn about Blockchain, Bitcoin, Ethereum, smart contracts, and layer2 blockchain solutions from expert instructors. Work on projects and assignments, and get the chance to participate in a blockchain internship upon successful completion.";

/*
SHEET LINK: https://docs.google.com/spreadsheets/d/1SGO2LJg_UxpFSVXkPTMy3nknzayUUWtLEmGZjXadBZM/edit#gid=1000945682
ID: 1SGO2LJg_UxpFSVXkPTMy3nknzayUUWtLEmGZjXadBZM
SHEET NAME: "Form Responses 1"

OLD APPLET LINK: 'https://script.google.com/macros/s/AKfycbx9PM_X4w9xZzOVO2Jzf_pZxhMtXBKWeSq_zJiYcgt0HA-mBBUiwuxECNatktoQMRAL0w/exec'
NEW APPLET LINK: "https://script.google.com/macros/s/AKfycbygHUNKksozhUh5r1pCrVwhTMvsos_apPglJl9o8QI3IJlESnrJJh3h33Uh0cAuM4QVhQ/exec"

APPLET CODE:
function doGet(e) {
  // Sheet ID and Sheet Name
  const sheetId = '1SGO2LJg_UxpFSVXkPTMy3nknzayUUWtLEmGZjXadBZM';
  const sheetName = 'Form Responses 1';
  const sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
  
  // Get the data range
  const range = sheet.getDataRange();
  const values = range.getValues();
  
  // Convert the data range to JSON
  const json = JSON.stringify(values);

  // Return the JSON data
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}
DEPLOYED ON:
Institute email.
*/ 