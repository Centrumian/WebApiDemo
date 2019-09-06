using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NoteRApp.Models.Database
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User() { Id = 1, Name = "Bob", Age = 18, Country = "USA" },
                new User() { Id = 2, Name = "Alex", Age = 20, Country = "Poland"},
                new User() { Id = 3, Name = "Ivan", Age = 30}
                );

        }

        public DbSet<User> Users { get; set; }
    }
}
