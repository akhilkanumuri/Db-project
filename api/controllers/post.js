  import { db } from "../db.js";

  export const getPosts = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts";
    db.query(q, [req.query.cat], (err, data) => {
      if (err) return res.send(err);
      return res.status(200).json(data);
    });
  };

  export const getPost = (req, res) => {
    const q = "SELECT u.username, p.title, p.desc, p.img, p.street,p.City,p.rooms,p.rent, u.img AS userImg, p.cat FROM posts p JOIN users u ON u.id = p.uid WHERE p.id=?";
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data[0]);
    });
  }; 

  export const addBooking = (req, res) => {
      const { post_id, user_id, date } = req.body;
      const q = "INSERT INTO bookings (post_id, user_id, date) VALUES (?, ?, ?)";
      db.query(q, [post_id, user_id, date], (err, data) => {
        if (err) {
          console.log(err); // log the error to the console for debugging
          return res.status(500).json({ error: "An error occurred while booking the property." });
        }
        return res.status(200).json("Booking added successfully");
      });
    };
    