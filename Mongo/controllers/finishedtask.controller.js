/**
 * Created by Student on 29/12/2016.
 */
import FinishedTask from '../MongoDB_Models/finishedtask.model';


//Create new finishedTask
function create(req, res) {
  const newFinishedTask = new FinishedTask({
    id : req.body.id,
    name : req.body.name,
    duedate : req.body.duedate,
    description : req.body.description,
    period : req.body.period,
    household_id: req.body.household_id,
    assigned_to : req.body.assigned_to,
    points : req.body.points,
    done: req.body.done,
    finished_by : req.body.finished_by,
    finished_on : req.body.finished_on
  });

  newFinishedTask.save(function (err) {
    if(err) throw new Error;
  })

}

export default {create};


