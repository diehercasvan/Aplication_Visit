using Aplication_Visit.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Aplication_Visit.Controllers
{
    public class LoginController : Controller
    {
        CtrlEmployee contEmployee = new CtrlEmployee();
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        // GET: Login  Employee
        public JsonResult LoginEmployee(DtoEmployee emp)
        {
                
            return Json(contEmployee.loginEmployee(emp), JsonRequestBehavior.AllowGet);
        }  
    }
}