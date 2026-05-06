'use client'
export default function SidebarToggle({ isOpen, onToggle }) {
  return <button onClick={onToggle} className="btn gray" title={isOpen ? 'Згорнути меню' : 'Розгорнути меню'}>{isOpen ? '◀️ Згорнути' : '▶️ Меню'}</button>
}
