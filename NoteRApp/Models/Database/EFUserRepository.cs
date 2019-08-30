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
            return _userContext.Users.ToList();
        }

        public void Update(User user)
        {
            _userContext.Update(user);
        }
    }
}
