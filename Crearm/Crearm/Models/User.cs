using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Crearm.Models
{
    [Table("tbUser")]
    public class User
    {
        [Column(TypeName = "Id")]
        public int Id { get; set; }
        [Column(TypeName = "CompanyID")]
        public int CompanyID { get; set; }
        [Column(TypeName = "RoleId")]
        public int RoleId { get; set; }
        [Column(TypeName = "Name")]
        public string Name { get; set; }
        [Column(TypeName = "Surname")]
        public string Surname { get; set; }
        [Column(TypeName = "Login")]
        public string Login { get; set; }
        [Column(TypeName = "Password")]
        public string Password { get; set; }
    }
}
