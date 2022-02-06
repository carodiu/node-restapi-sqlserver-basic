export const queries = {
    getAllEmployees:"Select * from Employee",
    insertEmployee:"INSERT INTO Employee (DocumentId,FullName,Address,Email,Phone,HireDate,BirthDate,IsFreelance,CostPerHour) VALUES (@documentId,@fullName,@address,@email,@phone,@hireDate,@birthDate,@isFreelance,@costPerHour)",
    getById:"Select * from Employee where id = @id",
    delete:"Delete Employee where id = @id",
    getTotalEmployees:"Select count(*) from Employee",
    update:"update dbo.Employee set documentId = @documentId, FullName=@fullName, Address=@address,Email=@email,Phone=@phone,HireDate=@hireDate,BirthDate=@birthDate,IsFreelance=@isFreelance,CostPerHour=@costPerHour) where id = @id"
}