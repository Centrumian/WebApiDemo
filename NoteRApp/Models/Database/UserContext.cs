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
            Note note1 = new Note() { Id = 1, UserID = 1, Header = "To my family", Content = "Hello, all!", CreationDate = new DateTime(2015, 10, 13, 3, 15, 1) };
            Note note2 = new Note() { Id = 2, UserID = 1, Header = "Presentation", Content = "Let me start...", CreationDate = new DateTime(2019, 11, 12, 5, 0, 55) };
            Note note3 = new Note() { Id = 3, UserID = 2, Header = "Soup recipe", Content = "Take a water...", CreationDate = DateTime.Now };

            modelBuilder.Entity<Note>().HasData(note1, note2, note3);
            modelBuilder.Entity<User>().HasData(
                new User() { Id = 1, Name = "Bob", Age = 18, Country = "USA"/*, Notes = new List<Note>() { note1, note2}*/ },
                new User() { Id = 2, Name = "Alex", Age = 20, Country = "Poland"/*, Notes = new List<Note>() { note3 } */},
                new User() { Id = 3, Name = "Ivan", Age = 30}
                );

        }

        public DbSet<User> Users { get; set; }
    }
}
