import Instances from "../models/InstanceModel.js";

export const getInstances = async(req, res) => {
    try {
        console.log("ssssssssssssssssssssssssssssss", req.body);
        const instances = await Instances.findAll({
        });
        res.json(instances);
    } catch (error) {
        console.log(error);
    }
}

export const createInstance = async (req, res) => {
    try {
      try {
        let instance = JSON.parse(req.body.instance);
        await Instances.create(instance);
        res.json({ msg: "Instance created successfully" });
      } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Invalid JSON data" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
};