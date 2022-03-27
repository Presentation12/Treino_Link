using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Funcionario
    {
        public int ID_Func { get; set; }
        public string Nome_Func { get; set; }
        public string Departamento { get; set; }
        public string Data_Entrada { get; set; }
        public string Ficheiro_Foto { get; set; }

    }
}
