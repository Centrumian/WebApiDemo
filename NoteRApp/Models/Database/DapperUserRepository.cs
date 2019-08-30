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
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public User Get(int id)
        {
            throw new NotImplementedException();
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
            throw new NotImplementedException();
        }
    }
}
