# ImageSearchApp

## What the project does

The project is a full-stack application built with React and a file-based database. It allows users to log in via Auth0 using their Google or GitHub account and search for images using the Google search engine integrated into the project. Users can save their favorite images and view them under "Favorites," as they are saved in a JSON file.

## Why the project is useful

The project provides a convenient way for users to search for and save images without taking up space on their devices or cloud services. Saved images are private to each user, and they can access them from any device by logging in.

## Installation

1. Clone the repository:
   git clone https://github.com/jennikaelisson/image-search-app.git

2. Navigate to the project directory:
   cd image-search-app

3. Install client-side dependencies:
   cd client/image-app-react
   npm install 

5. Install server-side dependencies:
   cd ../server
   npm install
   
7. Start the application:

   -  Run the client:
      cd ../client/image-app-react
      npm run dev

   -  Run the server:
      cd ../server
      node server

8. Auth0 and Google Search Engine:

  In order to use Auth0 and Google Search Engine, you must create an application and a search engine. After that you need to create an .env file in your frontend to store your keys.     The .env file is crucial to keep your keys private and secure, and to not allow others to use them. 

## Auth0:

1. Go to https://auth0.com/ and sign up/login.
    
2. Go to 'Applications/Applications' and click 'Create application'.
   
3. Name your app and choose 'Single Page Web Application'.
   
4. Go to Settings and save Domain key and ClientId key.
   
5. Scroll down and enter in your url (ie http://localhost:5174/) in the following:
 
  - Allowed Callback URLs
      
  - Allowed Logout URLs
     
  - Allowed Web Origins
     
6.  Save Changes.

## Google Search Engine

1. Go to https://programmablesearchengine.google.com/controlpanel/all and be logged in with your Google account.

2. Click 'Add' to add a search engine.

3. Name your engine and select 'Search the whole web'. Enable Image Search and click 'Create'.

4. Click 'Anpassa/Adjust'.

5. Save you search enginge's ID.

6. Now go to https://developers.google.com/custom-search/v1/overview.

7. Scroll down and click 'Get a key'.

8. Create a new project and click 'Next'.

9. Save your API key. 

## Create .env file

Go to the client side and in the root, create a new file and name it '.env'. Add your keys into the file as follow:

VITE_GOOGLE_API_KEY=[your_google_API_key]
VITE_GOOGLE_SEARCH_ENGINE_ID=[your_google_search_engine_ID]
   
## Usage

After the project has been installed, the user can access the landing page and will only be able to use the site after they have logged in. Then they will access the search field where they can write their search word/words, and click 'Search'. 10 results will appear. To save an image, click 'Save' next to the image. To view all saved images, click 'Favorites' in the menu.
In the search result you will also be presented with the search time, and if the input was misspelled, an alternative spelling will be presented and it will be clickable to allow easy usage. 

## Help

If you encounter any issues or have questions about the project, please feel free to contact the project creator @jennikaelisson or open an issue on GitHub.

## Project owner and contributer

The project is maintained and solely contributed to by Jennika Elisson. 
