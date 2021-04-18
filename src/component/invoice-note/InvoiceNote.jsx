import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {noteUpdated, selectNote} from "../../store/note";

const InvoiceNote = () => {
	const dispatch = useDispatch()
	const note = useSelector(selectNote)
	const noteInputHandler = e => {
		dispatch(noteUpdated(e.target.value))
	}
	return (
		<React.Fragment>
			<div>
				<h3 className="mb-3">  Notes</h3>
				<textarea
					name='note'
					value={note}
					onChange={noteInputHandler}
					className="form-control"
					cols="5" rows="6"
					placeholder="Notes - any relevant information not covered, additional terms and conditions"/>
			</div>
		</React.Fragment>
	);
};

export default InvoiceNote;