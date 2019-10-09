using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NoteRApp.Models.Database
{
    public class EFUserRepository : IUserRepository
    {
        DbContextOptions<UserContext> _options;

        UserContext _userContext;

        public EFUserRepository(UserContext userContext)
        {
            _userContext = userContext;
        }

        public void Create(User user)
        {
            _userContext.Add(user);
            _userContext.SaveChanges();
        }

        public void Delete(int id)
        {
            User user = _userContext.Users.FirstOrDefault(u => u.Id == id);
            if (user != null)
            {
                _userContext.Remove(user);
                _userContext.SaveChanges();
            }
        }

        public User Get(int id)
        {
            return _userContext.Users.FirstOrDefault(u => u.Id == id);
        }

        public IEnumerable<User> GetUsers()
        {
            var users = _userContext.Users.ToList();
            return users;
        }

        public IEnumerable<User> GetFilteredUsers(string param)
        {
            if (string.IsNullOrEmpty(param))
                return GetUsers();
           return _userContext.Users.Where(u => u.Name.ToLower().Contains(param.ToLower())).ToList();
        }

        public void Update(User user)
        {
            if (user != null)
            {
                _userContext.Update(user);
                _userContext.SaveChanges();
            }
        }
    }
}
