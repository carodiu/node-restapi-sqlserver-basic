<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">REST API with Nodejs and Sql Server Sample</h3>

  <p align="center">
    A basic Rest API with Nodejs and SQL Server
    <br />
    <a href="https://github.com/netnimbus/node-restapi-sqlserver-basic"><strong>Explore the docs »</strong></a>
    <br />
    <br />    
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
         <li><a href="#installation">Installation</a></li>
      </ul>
    </li>   
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>  
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a basic Rest API with Nodejs and SQL Server.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Nodejs](https://nodejs.org/)
* [mssql](https://www.npmjs.com/package/mssql)
* [express](https://www.npmjs.com/package/express)
* [morgan](https://www.npmjs.com/package/morgan)
* [cors](https://www.npmjs.com/package/cors)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [babel](https://babeljs.io/)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md)



<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/netnimbus/node-restapi-sqlserver-basic.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Add a `.env` file with this content
   ```
    # adapt accordingly
    PORT = 4000
    DB_USER = user
    DB_PASSWORD = 'password'
    DB_SERVER= '192.168.0.105'
    DB_DATABASE= 'dbname'
    DB_PORT = 15252

   ```
4. Open with VS Code 

5. Have installed Rest Client
    ```
    Use file requests\employees.http to send requests to the server

    ```

6. Have a table in the used DB like this
    ```
    CREATE TABLE [dbo].[Employee](
      [Id] [int] IDENTITY(1,1) NOT NULL,
      [DocumentId] [varchar](15) NOT NULL,
      [FullName] [varchar](100) NOT NULL,
      [Address] [varchar](300) NOT NULL,
      [Email] [varchar](50) NULL,
      [Phone] [varchar](20) NULL,
      [HireDate] [datetime] NOT NULL,
      [BirthDate] [datetime] NULL,
      [IsFreelance] [bit] NULL,
      [CostPerHour] [decimal](16, 2) NULL
    ) ON [PRIMARY]
    GO

    ```    

   
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Carolina Diaz 

Project Link: [https://github.com/netnimbus/node-restapi-sqlserver-basic](https://github.com/netnimbus/node-restapi-sqlserver-basic)

<p align="right">(<a href="#top">back to top</a>)</p>


