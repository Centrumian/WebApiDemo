using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NoteRApp.Models.Database
{
    public interface IUserRepository
    {
        void Create(User user);
        void Delete(int id);
        User Get(int id);
        IEnumerable<User> GetUsers();
        IEnumerable<User> GetFilteredUsers(string param);
        void Update(User user);
    }
}
