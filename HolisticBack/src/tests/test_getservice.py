import unittest
from unittest.mock import patch, MagicMock
from src.services.QaService import QaService, Qa

class TestQaService(unittest.TestCase):
    @patch('src.database.db_mysql.get_connection')
    def test_get_qa(self, mock_get_connection):
        # Configurando el mock
        mock_connection = MagicMock()
        mock_cursor = MagicMock()
        mock_cursor.fetchall.return_value = [(1, 'Question 1', 'Answer 1'), (2, 'Question 2', 'Answer 2')]
        mock_connection.cursor.return_value.__enter__.return_value = mock_cursor
        mock_get_connection.return_value = mock_connection
        
        # Ejecutando la función a probar
        result = QaService.get_qa()
        
        # Verificando el resultado
        self.assertEqual(len(result), 4)
        self.assertEqual(result[0].id_qa, 2)  # Primer elemento en la lista
        self.assertEqual(result[0].question, '¿Qué es SOP?')
        self.assertEqual(result[0].answer, 'El síndrome de ovario poliquístico (SOP) es una afección endocrina común en mujeres en edad reproductiva. Se caracteriza por desequilibrios hormonales que pueden provocar síntomas como períodos menstruales irregulares, exceso de vello corporal, acné, problemas de fertilidad y quistes en los ovarios. El tratamiento suele implicar una combinación de cambios en el estilo de vida')
        self.assertEqual(result[1].id_qa, 3)  # Segundo elemento en la lista
        self.assertEqual(result[1].question, '¿Qué cambios debo hacer para sentirme mejor?')
        self.assertEqual(result[1].answer, 'Para mejorar el síndrome de ovario poliquístico (SOP), enfócate en mantener un peso saludable, seguir una dieta balanceada, hacer ejercicio regularmente, manejar el estrés y tener consultas regulares con un médico. Estos cambios pueden ayudar a regular los niveles hormonales y mejorar los síntomas.')

    # más pruebas para los otros métodos 

if __name__ == '__main__':
    unittest.main()
