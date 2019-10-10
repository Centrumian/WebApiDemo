using System;
using System.Collections.Generic;
using Dapper;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace NoteRApp.Models.Database
{
    public class DapperUserRepository : IUserRepository
    {
        string _connectionString;
        public DapperUserRepository(string con)
        {
            _connectionString = con;
        }

        public void Create(User user)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sqlQuery = "INSERT INTO Users (Name, Age, RegistryDate, Gender, IsAdmin)" +
                    " VALUES(@Name, @Age, @RegistryDate, @Gender, @IsAdmin)";
                db.Execute(sqlQuery, user);
            }
        }

        public void Delete(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sqlQuery = "DELETE FROM Users" +
                    $"WHERE Id='${id}'";
                db.Execute(sqlQuery);
            }
        }

        public User Get(int id)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sqlQuery = "SELECT * FROM Users" +
                    $"WHERE Id='${id}'";
                return db.QueryFirst<User>(sqlQuery);
            }
        }

        public IEnumerable<User> GetFilteredUsers(string param)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sqlQuery = "SELECT * FROM Users " +
                    $"WHERE Name LIKE '%{param}%'";
                return db.Query<User>(sqlQuery);
            }
        }

        public IEnumerable<User> GetUsers()
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                return db.Query<User>("SELECT * FROM Users").ToList();
            }
        }

        public void Update(User user)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sqlQuery = "UPDATE * FROM Users" +
                    $"SET Name={user.Name}, Age={user.Age}, RegistryDate={user.RegistryDate}, Gender={user.Gender}, IsAdmin={user.IsAdmin}" +
                    $"WHERE Id='${user.Id}'";
                db.Execute(sqlQuery);
            }
        }
    }
}
