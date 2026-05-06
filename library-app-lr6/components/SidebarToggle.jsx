'use client'
export default function SidebarToggle({ isOpen, onToggle }) { return <button className="btn gray" onClick={onToggle}>{isOpen ? '◀️ Згорнути' : '▶️'}</button> }
